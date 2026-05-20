let currentPage = 1;
const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

async function getTasks(page = 1) {

    currentPage = page;

    const response = await fetch(
        `http://127.0.0.1:8000/api/tasks/?page=${page}`,
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
        "http://127.0.0.1:8000/api/tasks/",
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

    getTasks();
}

async function completeTask(id) {

    await fetch(
        `http://127.0.0.1:8000/api/tasks/${id}/`,
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

    getTasks();
}

async function deleteTask(id) {

    await fetch(
        `http://127.0.0.1:8000/api/tasks/${id}/`,
        {
            method: "DELETE",

            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    getTasks();
}

function logout() {

    localStorage.removeItem("token");

    window.location.href = "login.html";
}

getTasks();

async function filterTasks(status) {

    const response = await fetch(
        `http://127.0.0.1:8000/api/tasks/?completed=${status}`,
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

function nextPage(){

    currentPage++;

    getTasks(currentPage);
}

function previousPage(){

    if(currentPage > 1){

        currentPage--;

        getTasks(currentPage);
    }
}