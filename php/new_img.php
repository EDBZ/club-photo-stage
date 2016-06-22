<?php

include_once('Photo.class.php');

/************************************************************
 * Definition des constantes / tableaux et variables
 *************************************************************/

// Constantes
define('TARGET', 'upload');    // Repertoire cible
define('MAX_SIZE', 500);    // Taille max en koctets du fichier
define('WIDTH_MAX', 2200);    // Largeur max de l'image en pixels
define('HEIGHT_MAX', 2200);    // Hauteur max de l'image en pixels

// Tableaux de donnees
$tabExt = array('jpg','gif','png','jpeg');    // Extensions autorisees
$infosImg = array();

// Variables
$poid = '';
$extension = '';
$message = '';
$nomImage = '';
/************************************************************
 * Creation du repertoire cible si inexistant
 *************************************************************/
if( !is_dir('../'.TARGET) ) {
  if( !mkdir('../'.TARGET, 0777) ) {
    exit('Erreur : le répertoire cible ne peut-être créé ! Vérifiez que vous diposiez des droits suffisants pour le faire ou créez le manuellement !');
  }
}

/************************************************************
 * Script d'upload
 *************************************************************/
// if(!empty($_FILE))
if (!empty($_FILE))
{

  // On verifie si le champ est rempli
  if( !empty($_FILE['fichier']['name']) )
  {
    // Recuperation de l'extension du fichier
    $extension  = pathinfo($_FILE['fichier']['name'], PATHINFO_EXTENSION);
    $extension = strtolower($extension);

    // On verifie l'extension du fichier
    if(in_array(strtolower($extension),$tabExt))
    {
      // On recupere les dimensions du fichier
      $infosImg = getimagesize($_FILE['fichier']['tmp_name']);
      //recuperation poid en kb
      $poid = filesize($_FILE['fichier']['tmp_name'])/1000;

      // On verifie le type de l'image
      if($infosImg[2] >= 1 && $infosImg[2] <= 14)
      {
        // On verifie les dimensions et taille de l'image
        if(($infosImg[0] <= WIDTH_MAX) && ($infosImg[1] <= HEIGHT_MAX) && ($poid <= MAX_SIZE))
        {
          // Parcours du tableau d'erreurs
          if(isset($_FILE['fichier']['error'])
            && UPLOAD_ERR_OK === $_FILE['fichier']['error'])
          {
            // On renomme le fichier
            $nomImage = md5(uniqid()) .'.'. $extension;
            // Si c'est OK, on teste l'upload
            if(move_uploaded_file($_FILE['fichier']['tmp_name'], '../'.TARGET.$nomImage))
            {
              $message = count($_FILE);
/*  //=================================================================================
$uploaddir = './files';
$uploadfile = $uploaddir . basename($_FILE['userfile']['name']);

if (move_uploaded_file($_FILE['userfile']['tmp_name'], $uploadfile)) {
} else {
}

echo 'Here is some more debugging info:';
print_r($_FILE);

// =================================================================================*/

              // $req = $bdd->prepare('INSERT INTO images (nom,id_user,new_nom,width,height,poid,extension,chemin,galerie,date_ajout) VALUES(?,?,?,?,?,?,?,?,?,NOW())');
              // $req->execute(array(
              //   $_FILE['fichier']['name'],
              //   $_SESSION['id'],
              //   $nomImage,
              //   $infosImg[0],
              //   $infosImg[1],
              //   $poid,
              //   $extension,
              //   TARGET.$nomImage,
              //   $_FILE['galerie']));
              //
              // $req->closeCursor();
              //
              // $rep = $bdd->prepare('SELECT * FROM images WHERE new_nom=?');
              // $rep->execute(array($nomImage));
              // $donnees = $rep->fetch();
              //
              // $new_photo = new Photo($donnees['id'],$donnees['id_user'],$donnees['nom'],$donnees['new_nom'],$donnees['width'],$donnees['height'],$donnees['poid'],$donnees['extension'],$donnees['chemin'],$donnees['galerie'],$donnees['date_ajout']);
              // $rep->closeCursor();
              //
              // if ($new_photo->get_width()>1000) {
              //   $new_photo->resize();
              // }
              // $new_photo->logoBD();

              header('Location: ../index.html');
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
  else
  {
    // Sinon on affiche une erreur pour le champ vide
    $message = 'Veuillez remplir le formulaire svp !';
    ?>
    <pre>
      <?php echo "test empty files"; ?>
    </pre>
    <?php

  }

}
$_SESSION['message'] = $message;
// header('Location: ../galerie.php');
