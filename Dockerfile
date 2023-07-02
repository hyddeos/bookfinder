# Base image
FROM python:3.11.0

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy requirements files
COPY requirements.txt .
COPY package.json .
COPY package-lock.json .
COPY webpack.config.js .
COPY tailwind.config.js .
COPY postcss.config.js .
COPY .babelrc .
COPY manage.py .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install Node.js and NPM
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Install frontend dependencies
RUN npm install

#add frontend files
COPY frontend /app/frontend

#add frontend files
COPY backend /app/backend

#add frontend files
COPY staticfiles /app/staticfiles

# Build the React frontend
RUN npm run build

# Move the built frontend to the Django static files directory
# RUN mv build /app/static

# Expose the port for Django
EXPOSE 8000

# Make migrations for DB and run the Django development server
CMD python manage.py makemigrations && python manage.py runserver 0.0.0.0:8000
