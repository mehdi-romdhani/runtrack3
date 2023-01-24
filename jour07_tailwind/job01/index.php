<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Link API TAILWIND -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

    <!-- LINK CSS -->
    <link rel="stylesheet" href="./assets/style.css">
    <title>Welcome Tailwind</title>


</head>

<body>


    <header class="flex flex-row justify-start bg-blue-400">
        <nav>
            <ul>
                <div class="flex flex-row bg-blue-400 ml-5 pt-5 pb-5 text-white">

                    <li class="mr-5">
                        <a href="#">Accueil</a>
                    </li>
                    <li class="mr-5">
                        <a href="#">Inscription</a>
                    </li>
                    <li class="mr-5">
                        <a href="#">Connexion</a>
                    </li>
                    <li class="mr-5">
                        <a href="#">Rechercher</a>
                    </li>
                </div>

            </ul>
        </nav>
    </header>

    <div class="flex flex-row justify-center pt-2 mt-2">

        <h2>Créer un compte</h2>


    </div>

    <div class="flex flex-row justify-center mt-6">
        <section>
            <form>
                <div class="pt-2">
                    <label>Civilité:</label>
                </div>
                <div class="pt-2">
                    <input type="radio" name="civility" value="Monsieur"> Monsieur
                    <input type="radio" name="civility" value="Madame"> Madame
                </div>
                <div class="pt-2">
                    <label>Prénom:</label>
                </div>
                <input type="text" name="firstname" required>

                <div class="pt-2">
                    <label>Nom:</label>
                </div>

                <input type="text" name="lastname" required>

                <div class="pt-2">
                    <label>Adresse:</label>
                </div>

                <input type="text" name="address" required>
                <div class="pt-2">
                    <label>Adresse email:</label>
                </div>
                <input type="email" name="email" required>
                <div class="pt-2">
                    <label>Mot de passe:</label>
                </div>

                <input type="password" name="password" required class="w-30">


                <div class="pt-2">

                    <label>Confirmer le mot de passe:</label>
                </div>
                <input type="password" name="password-confirm" required>
                <div class="pt-2">

                    <label>Passions:</label>
                </div>

                <div class="flex items-center mt-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Informatique</label>
                </div>
                <div class="flex items-center mt-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Voyages</label>
                </div>
                <div class="flex items-center mt-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sport</label>
                </div>
                <div class="flex items-center mt-4">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lecture</label>
                </div>


                <div class="flex items-center mt-3">
                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                </div>
                <div class="flex flex-row justify-center mt-3">
                    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ">
                        S'inscrire
                    </button>

                </div>

                <div class="flex items-center justify-between mt-3">
                    <button></button>
                </div>
                
            </form>
        </div>
    </section>

    </div>


    <footer class="flex flex-row justify-center mt-3">
        <div class="mr-2">
            <p class="">Mehdi Romdhani</p>
        </div>
        <div class="mr-2"><i class="">Tailwind</i></div>
        <div class="mr-2"><small>V.1</small></div>
    </footer>

    <div class="flex flex-row justify-center">
        <img src="" alt="">
    </div>

</body>

</html>