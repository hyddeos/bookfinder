# Base image
FROM python:3.11.0

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy requirements files
COPY requirements.txt .
COPY frontend/package.json .
COPY frontend/package-lock.json .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install Node.js and NPM
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Change to the frontend directory
WORKDIR /app

# Install frontend dependencies
RUN npm install

# Build the React frontend
RUN npm run build

# Change back to the Django project directory
WORKDIR /app

# Copy Django project files
COPY . /app

# Expose the port for Django
EXPOSE 8000

# Run Django development server
CMD python manage.py runserver 0.0.0.0:8000