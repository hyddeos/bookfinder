# Base image
FROM python:3.11.0

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Copy webpack.config.js
COPY webpack.config.js .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Install Node.js and NPM
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# Print a message
RUN echo "NPM STARTING..."

# Install frontend dependencies
RUN npm install

# Print a message
RUN echo "NPM INSTALL DONE, RUN BUILD START"

# Copy all files and directories from the current directory to /app
COPY * /app/

# Print the contents of the current directory
RUN ls -al

# Build the React frontend
RUN npm run build

# Print a message
RUN echo "BUILD DONE, EXPOSES PORT"

# Expose the port for Django
EXPOSE 8000

# Run Django development server
CMD python manage.py runserver 0.0.0.0:8000