<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add Exercise</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-200 ">

    <nav class="bg-gray-800 text-white p-3">
        <div class="container mx-auto flex justify-between items-center">
            <div class="text-2xl font-bold"><img src="assets/app_logo.png" alt="Logo" width="60" height="50"></div>
            <div>
                <a href="dashboard.php" class="px-3 py-2 hover:bg-gray-700 rounded">Home</a>
                <a href="users.php" class="px-3 py-2 hover:bg-gray-700 rounded">Users</a>
                <a href="exercises.php" class="px-3 py-2 hover:bg-gray-700 rounded">Exercises</a>
                <a href="logout.php" class="px-3 py-2 hover:bg-gray-700 rounded">Logout</a>
            </div>

        </div>

    </nav>

    <div class="container mx-auto p-4 flex">
        <div class="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
            <h2 class="text-lg font-semibold mb-4">Add Exercise</h2>
            <form action="submit_exsercise.php" method="post" enctype="multipart/form-data" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input type="text" id="name" name="name" class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        required>
                </div>

                <div>
                    <label for="slogan" class="block text-sm font-medium text-gray-700">
                        Slogan
                    </label>
                    <input type="text" id="slogan" name="slogan"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
                </div>

                <div>
                    <label for="second" class="block text-sm font-medium text-gray-700">
                        Second
                    </label>
                    <input type="number" id="second" name="second"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
                </div>

                <div>
                    <label for="image" class="block text-sm font-medium text-gray-700">
                        Image
                    </label>
                    <input type="file" id="image" name="image" accept="image/*"
                        class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
                </div>

                <div class="flex justify-end">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Add Exercise
                    </button>
                </div>
            </form>
        </div>

        <div class="bg-white rounded-md shadow-md p-4">
            <div class="container mx-auto p-6">
                <h1 class="text-2xl font-bold mb-6">Exercise Details</h1>
                <?php
                $conn = new mysqli("localhost", "root", "", "fitness");

                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }
                $sql = "SELECT name, slogan, second, image_url FROM exercise";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    echo"
                    <table class='bg-white shadow-md rounded my-6'>
                        <thead>
                            <tr class= 'bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                                <th class='px-6 py-3'>Image</th>
                                <th class='px-6 py-3'>Name</th>
                                <th class='px-6 py-3'>Email</th>
                                <th class='px-6 py-3'>Duration</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                    ";

                    while ($row = $result->fetch_assoc()) {
                        echo "
                            <tr class='border-b border-gray-200 hover:bg-gray-100'>
                            <td class='px-6 py-3 text-left'>
                                <div style='width: 50px; height: 50px; overflow: hidden; border-radius: 50%; margin-right: 10px'>
                                    <img src='" . $row["image_url"] . "' alt='Profile Image' style='width: 100%; height: 100%; object-fit: cover'>
                                </div>
                            </td>
                            <td class='px-6 py-4 text-left'>" . $row["name"] . "</td>
                            <td class='px-6 py-4 text-left'>" . $row["slogan"] . "</td>
                            <td class='px-6 py-4 text-left'>" . $row["second"] . "</td>
                            </tr>
                        ";
                    }
                }else{
                    echo"zero results";
                }

                $conn->close();
                ?>
            </div>
        </div>
    </div>
</body>

</html>