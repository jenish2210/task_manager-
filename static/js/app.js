let currentPage = 1;
const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "/login/";
}

async function getTasks(page = 1) {

    currentPage = page;

    const response = await fetch(
        `/api/tasks/?page=${page}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    const tasks = data.results || data;

    let html = "";

    tasks.forEach(task => {

        html += `
        <li>

            <span>
                ${task.completed ? "✅" : "❌"}
                ${task.title}
            </span>

            <div class="task-buttons">

                <button onclick="completeTask(${task.id})">
                    Complete
                </button>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>

            </div>

        </li>
        `;
    });

    document.getElementById(
        "taskList"
    ).innerHTML = html;
}

async function createTask() {

    const title =
        document.getElementById("taskInput").value;

    await fetch(
        "/api/tasks/",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                title
            })
        }
    );

    document.getElementById("taskInput").value = "";

    getTasks(currentPage);
}

async function completeTask(id) {

    await fetch(
        `/api/tasks/${id}/`,
        {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify({
                completed: true
            })
        }
    );

    getTasks(currentPage);
}

async function deleteTask(id) {

    await fetch(
        `/api/tasks/${id}/`,
        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    getTasks(currentPage);
}

function logout() {

    localStorage.removeItem("token");

    window.location.href = "/login/";
}

async function filterTasks(status) {

    const response = await fetch(
        `/api/tasks/?completed=${status}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    const data = await response.json();

    const tasks = data.results || data;

    let html = "";

    tasks.forEach(task => {

        html += `
        <li>

            <span>
                ${task.completed ? "✅" : "❌"}
                ${task.title}
            </span>

            <div class="task-buttons">

                <button onclick="completeTask(${task.id})">
                    Complete
                </button>

                <button onclick="deleteTask(${task.id})">
                    Delete
                </button>

            </div>

        </li>
        `;
    });

    document.getElementById(
        "taskList"
    ).innerHTML = html;
}

