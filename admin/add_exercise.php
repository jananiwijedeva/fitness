<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add Exercise</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="bg-gray-200 p-4">

    

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
                <input type="text" id="slogan" name="slogan" class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required>
            </div>

            <div>
                <label for="second" class="block text-sm font-medium text-gray-700">
                    Second
                </label>
                <input type="number" id="second" name="second" class="mt-1 p-2 border border-gray-300 rounded-md w-full"
                    required>
            </div>

            <div>
                <label for="image" class="block text-sm font-medium text-gray-700">
                    Image
                </label>
                <input type="file" id="image" name="image" accept="image/*"
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full" required>
            </div>

            <div class="flex justify-end">
                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Add Exercise
                </button>
            </div>
        </form>
    </div>
</body>

</html>