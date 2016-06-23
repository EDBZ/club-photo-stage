<?php

// Constantes
define('TARGET', '../upload/'.$_POST[galerie].'/');    // Repertoire cible
define('MAX_SIZE', 2000);    // Taille max en koctets du fichier
define('WIDTH_MAX', 2200);    // Largeur max de l'image en pixels
define('HEIGHT_MAX', 2200);    // Hauteur max de l'image en pixels

// Reorganisation de $_FILE
function reArrayFiles(&$file_post) {

    $file_ary = array();
    $file_count = count($file_post['name']);
    $file_keys = array_keys($file_post);

    for ($i=0; $i<$file_count; $i++) {
        foreach ($file_keys as $key) {
            $file_ary[$i][$key] = $file_post[$key][$i];
        }
    }

    return $file_ary;
}

// Tableaux de donnees
$tabExt = array('jpg','gif','png','jpeg');    // Extensions autorisees
$infosImg = array();
// $infoGal = array();
// Variables
$poid = '';
$extension = '';
$message = '';
$nomImage = '';

/************************************************************
 * Creation du repertoire cible si inexistant
 *************************************************************/
if( !is_dir(TARGET) ) {
  if( !mkdir(TARGET, 0777) ) {
    exit('Erreur : le répertoire cible ne peut-être créé ! Vérifiez que vous diposiez des droits suffisants pour le faire ou créez le manuellement !');
  }
}
if (!empty($_FILES['file'])) {
    $file_ary = reArrayFiles($_FILES['file']);

    foreach ($file_ary as $file) {

        // Recuperation de l'extension du fichier
        $extension  = pathinfo($file['name'], PATHINFO_EXTENSION);
        $extension = strtolower($extension);

        // On verifie l'extension du fichier
        if(in_array(strtolower($extension),$tabExt))
        {
          // On recupere les dimensions du fichier
          $infosImg = getimagesize($file['tmp_name']);
          //recuperation poid en kb
          $poid = filesize($file['tmp_name'])/1000;

          // On verifie le type de l'image
          if($infosImg[2] >= 1 && $infosImg[2] <= 14)
          // On verifie les dimensions et taille de l'image
          {

            if(($infosImg[0] <= WIDTH_MAX) && ($infosImg[1] <= HEIGHT_MAX) && ($poid <= MAX_SIZE))
            {
              // Parcours du tableau d'erreurs
              if(isset($file['error'])
                && UPLOAD_ERR_OK === $file['error'])
              {
                // On renomme le fichier
                $nomImage = md5(uniqid()) .'.'. $extension;
                // Si c'est OK, on teste l'upload
                  // $infoGal=$_POST;

                if($extension=='jpg'){
                  header ("Content-type: image/jpeg"); // L'image que l'on va créer est un jpeg
                  $destination = imagecreatefromjpeg($file['tmp_name']); // La photo est la destination
                }else{
                  header ("Content-type: image/png"); // L'image que l'on va créer est un png
                  $destination = imagecreatefrompng($file['tmp_name']); // La photo est la destination
                }
                $source = imagecreatefromjpeg("../img/logo-Th.jpg"); // Le logo est la source

                // Les fonctions imagesx et imagesy renvoient la largeur et la hauteur d'une image
                $largeur_source = imagesx($source);
                $hauteur_source = imagesy($source);
                $largeur_destination = $infosImg[0];
                $hauteur_destination = $infosImg[1];

                // On veut placer le logo en bas à droite, on calcule les coordonnées où on doit placer le logo sur la photo
                $destination_x = 800 - $largeur_source;
                  $destination_y =  ((800*$hauteur_destination)/$largeur_destination) - $hauteur_source;

                // On met le logo (source) dans l'image de destination (la photo)
                imagecopymerge($destination, $source, $destination_x, $destination_y, 0, 0, $largeur_source, $hauteur_source, 60);

                if($extension=='jpg'){
                  imagejpeg($destination,$file['tmp_name']);
                }else{
                  imagepng($destination,$file['tmp_name']);
                }
                if(move_uploaded_file($file['tmp_name'], TARGET.$nomImage))
                {
                  $exif = exif_read_data($_FILE['file'], 0, true);
                  echo "test:<br />\n";
                  foreach ($exif as $key => $section) {
                      foreach ($section as $name => $val) {
                          echo "$key.$name: $val<br />\n";
                      }
                  }

                  $message='upload réussi !';
                  }
                }
                else
                {
                  // Sinon on affiche une erreur systeme
                  $message = 'Problème lors de l\'upload !';
                }
              }
              else
              {
                $message = 'Une erreur interne a empêché l\'uplaod de l\'image';
              }
            }
            else
            {
              // Sinon erreur sur les dimensions et taille de l'image
              $message = 'Erreur dans les dimensions de l\'image !';
            }
          }
          else
          {
            // Sinon erreur sur le type de l'image
            $message = 'Le fichier à uploader n\'est pas une image !';
          }
        }
        else
        {
          // Sinon on affiche une erreur pour l'extension
          $message = 'L\'extension du fichier est incorrecte !';
        }
      }
    }

        echo $message;

   ?>
