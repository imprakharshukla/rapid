FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all the files from the project’s root to the working directory
COPY . .

# Install PNPM to 
RUN npm install -g pnpm@8.9.0

# Install Turbo
RUN npm install -g turbo

# Install app dependencies
RUN pnpm install

# Generate Prisma Client
RUN pnpm db:generate

# Expose the port that your NestJS app will run on
EXPOSE 3002

# Build ExpressJS app
RUN pnpm build --filter backend

# Command to run the application
CMD cd apps/backend && pnpm run start