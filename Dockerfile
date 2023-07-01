
# Base image with Python 3.11
FROM python:3.11

# Set working directory
WORKDIR /app

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Copy requirements.txt to the working directory
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install JavaScript dependencies
RUN npm ci

# Copy the webpack.config.js file to the working directory
COPY webpack.config.js .

# Copy the entire frontend directory to the working directory
COPY frontend frontend

# Build the frontend assets
RUN npm run build

# Copy the Django project code to the working directory
COPY . .

# Run Django migrations (if necessary)
RUN python manage.py migrate

# Expose the necessary ports (replace 8000 with your Django app's port)
EXPOSE 8000

# Start the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

