
# Real-Time Updates Feature - Backend and Frontend

## Overview

This project simulates real-time updates triggered by a "like" button on a simulated post. The backend exposes an API endpoint to "like" an item, and this action triggers a broadcast of the updated data. The frontend subscribes to these updates and reflects the changes with a visual indication when an item has been updated.

## Technologies Used

- **Backend**: .NET Core
  - ASP.NET Core Web API
  - In-memory subscription mechanism
  - Rate-limiting for update broadcasts
 

- **Frontend**: Angular
  - Angular services for subscribing to backend updates
  - Dynamic UI updates on receiving new data
    

---

## Backend Implementation

### 1. **Setting up the API**

The backend exposes an API endpoint to handle "likes" and notify connected clients of updates.

#### 1.1. **API Endpoints**

- `POST /api/posts/{id}/like`: Increments the "like" count for a post.
- `GET /api/subscribe`: Pushes real-time updates to the frontend.

#### 1.2. **In-Memory Subscription**

An in-memory subscription mechanism tracks connected clients and sends updates when a post is liked.

#### 1.3. **Rate-Limiting Mechanism**

Rate-limiting is applied to prevent overwhelming the frontend by sending updates at a reasonable interval.


---

## Frontend Implementation

### 1. **Subscription Logic**

In the frontend (Angular), a service is created to subscribe to the backend's update stream.

### 2. **UI Updates**

Upon receiving new data, the UI dynamically updates to reflect the changes. A visual indication is added to highlight the updated items.

---

## Steps to Implement the Project

1. **Set Up the Backend**:
   - Create API endpoints in ASP.NET Core to handle "like" actions and push updates to the frontend.
   - Implement an in-memory subscription system to track and notify connected clients.

2. **Set Up the Frontend**:
   - In Angular, create a service to subscribe to updates from the backend.
   - Update the UI dynamically to display the latest changes.


