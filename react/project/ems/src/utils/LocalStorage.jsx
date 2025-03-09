

const employees = [
    {
      "id": 1,
      "firstname": "Amit",
      "email": "e@e.com",
      "password": "123",
      "task_count": {
        "active": 1,
        "new_task": 1,
        "complete": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Update Client Records",
          "task_description": "Update and verify all client details in the database.",
          "task_date": "2025-03-08",
          "task_category": "Data Management"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Prepare Monthly Report",
          "task_description": "Generate and finalize the monthly sales report.",
          "task_date": "2025-02-28",
          "task_category": "Reporting"
        }
      ]
    },
    {
      "id": 2,
      "firstname": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "task_count": {
        "active": 1,
        "new_task": 1,
        "complete": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Resolve Customer Queries",
          "task_description": "Respond to customer emails and resolve queries.",
          "task_date": "2025-03-09",
          "task_category": "Customer Support"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Update Inventory List",
          "task_description": "Ensure all stock levels are updated in the system.",
          "task_date": "2025-02-25",
          "task_category": "Inventory Management"
        }
      ]
    },
    {
      "id": 3,
      "firstname": "Rahul",
      "email": "employee3@example.com",
      "password": "123",
      "task_count": {
        "active": 1,
        "new_task": 1,
        "complete": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Conduct Performance Review",
          "task_description": "Review the performance of team members and submit reports.",
          "task_date": "2025-03-05",
          "task_category": "HR"
        },
        {
          "active": true,
          "new_task": false,
          "complete": false,
          "failed": true,
          "task_title": "Fix Website Bug",
          "task_description": "Debug and fix critical issues on the website.",
          "task_date": "2025-03-07",
          "task_category": "Development"
        }
      ]
    },
    {
      "id": 4,
      "firstname": "Sneha",
      "email": "employee4@example.com",
      "password": "123",
      "task_count": {
        "active": 1,
        "new_task": 1,
        "complete": 1,
        "failed": 0
      },
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Schedule Social Media Posts",
          "task_description": "Prepare and schedule posts for social media channels.",
          "task_date": "2025-03-10",
          "task_category": "Marketing"
        },
        {
          "active": false,
          "new_task": false,
          "complete": true,
          "failed": false,
          "task_title": "Design New Product Logo",
          "task_description": "Create and finalize the design for a new product logo.",
          "task_date": "2025-02-20",
          "task_category": "Design"
        }
      ]
    },
    {
      "id": 5,
      "firstname": "Vikas",
      "email": "employee5@example.com",
      "password": "123",
      "task_count": {
        "active": 1,
        "new_task": 1,
        "complete": 0,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "new_task": false,
          "complete": false,
          "failed": true,
          "task_title": "Prepare Budget Forecast",
          "task_description": "Analyze and prepare a financial forecast for Q2.",
          "task_date": "2025-03-06",
          "task_category": "Finance"
        },
        {
          "active": false,
          "new_task": true,
          "complete": false,
          "failed": false,
          "task_title": "Organize Office Event",
          "task_description": "Plan and coordinate the upcoming team-building event.",
          "task_date": "2025-03-15",
          "task_category": "Event Management"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "firstname": "Rajesh",
      "email": "admin@me.com",
      "password": "123"
    }
  ];
  
  

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
