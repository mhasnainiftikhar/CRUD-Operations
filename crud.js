$(document).ready(function() {
    // Function to get all employees
    function getAllEmployees() {
        $.ajax({
            url: 'https://dummy.restapiexample.com/api/v1/employees',
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#getAllEmployeesResponse').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to get single employee
    function getEmployee(id) {
        $.ajax({
            url: `https://dummy.restapiexample.com/api/v1/employee/${id}`,
            type: 'GET',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#getEmployeeResponse').html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to create new employee record
    function createEmployee(data) {
        $.ajax({
            url: 'https://dummy.restapiexample.com/api/v1/create',
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function(response) {
                // Handle success response
                $('#createEmployeeResponse').html(JSON.stringify(response));
                // Refresh the list of all employees after creation
                getAllEmployees();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to update employee record
    function updateEmployee(id, data) {
        $.ajax({
            url: `https://dummy.restapiexample.com/api/v1/update/${id}`,
            type: 'PUT',
            dataType: 'json',
            data: data,
            success: function(response) {
                // Handle success response
                $('#updateEmployeeResponse').html(JSON.stringify(response));
                // Refresh the list of all employees after update
                getAllEmployees();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Function to delete employee record
    function deleteEmployee(id) {
        $.ajax({
            url: `https://dummy.restapiexample.com/api/v1/delete/${id}`,
            type: 'DELETE',
            dataType: 'json',
            success: function(response) {
                // Handle success response
                $('#deleteEmployeeResponse').html(JSON.stringify(response));
                // Refresh the list of all employees after deletion
                getAllEmployees();
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error(error);
            }
        });
    }

    // Example usage
    $('#createEmployeeForm').submit(function(event) {
        event.preventDefault();
        var name = $('#name').val();
        var salary = $('#salary').val();
        createEmployee({ name: name, salary: salary });
    });

    $('#updateEmployeeForm').submit(function(event) {
        event.preventDefault();
        var id = $('#updateId').val();
        var name = $('#updateName').val();
        var salary = $('#updateSalary').val();
        updateEmployee(id, { name: name, salary: salary });
    });

    $('#deleteEmployeeForm').submit(function(event) {
        event.preventDefault();
        var id = $('#deleteId').val();
        deleteEmployee(id);
    });

    $('#getAllEmployeesBtn').click(function() {
        getAllEmployees();
    });

    $('#getEmployeeBtn').click(function() {
        var id = prompt("Enter Employee ID:");
        if (id !== null && id !== "") {
            getEmployee(id);
        }
    });

    // Initially load all employees when the page loads
    getAllEmployees();
});
