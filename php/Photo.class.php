<?php

class Photo
{
  private $_id;
  private $_id_user;
  private $_nom;
  private $_new_nom;
  private $_width;
  private $_height;
  private $_poid;
  private $_extension;
  private $_chemin;
  private $_galerie;
  private $_date_ajout;


  public function __construct($id,$id_user,$nom,$new_nom,$width,$height,$poid,$extension,$chemin,$galerie,$date_ajout)
  {
    $this->setId($id);
    $this->setIdUser($id_user);
    $this->setNom($nom);
    $this->setNewNom($new_nom);
    $this->setWidth($width);
    $this->setHeight($height);
    $this->setPoid($poid);
    $this->setExtension($extension);
    $this->setChemin($chemin);
    $this->setGalerie($galerie);
    $this->setDateAjout($date_ajout);
  }

  public function setId($id)
  {
    $this->_id=$id;
  }
  public function setIdUser($id_user)
  {
    $this->_id_user=$id_user;
  }
  public function setNom($nom)
  {
    $this->_nom=$nom;
  }
  public function setNewNom($new_nom)
  {
    $this->_new_nom=$new_nom;
  }
  public function setWidth($width)
  {
    $this->_width=$width;
  }
  public function setHeight($height)
  {
    $this->_height=$height;
  }
  public function setPoid($poid)
  {
    $this->_poid=$poid;
  }
  public function setExtension($extension)
  {
    $this->_extension=$extension;
  }
  public function setChemin($chemin)
  {
    $this->_chemin='../'.$chemin;
  }
  public function setGalerie($galerie)
  {
    $this->_galerie=$galerie;
  }
  public function setDateAjout($date_ajout)
  {
    $this->_date_ajout=$date_ajout;
  }

  public function get_width()
  {
    return $this->_width;
  }

  public function resize()
  {
    if($this->_extension=='jpg'){
      header ("Content-type: image/jpeg"); // L'image que l'on va créer est un jpeg
      $destination = imagecreatefromjpeg($this->_chemin); // La photo est la destination
    }else{
      header ("Content-type: image/png"); // L'image que l'on va créer est un png
      $destination = imagecreatefrompng($this->_chemin); // La photo est la destination
    }

    $largeur_destination = imagesx($destination);
    $hauteur_destination = imagesy($destination);


    $resize = imagecreatetruecolor(1000, (1000*$hauteur_destination)/$largeur_destination);

    $largeur_resize=imagesx($resize);
    $hauteur_resize=imagesy($resize);

      // On crée la miniature
    imagecopyresampled($resize, $destination, 0, 0, 0, 0, $largeur_resize, $hauteur_resize, $largeur_destination, $hauteur_destination);
      if($this->_extension=='jpg'){
        imagejpeg($resize,$this->_chemin);
      }else{
        imagepng($resize,$this->_chemin);
      }
    }

    public function logoBD()
    {
      echo 'pouet';
      if($this->_extension=='jpg'){
        header ("Content-type: image/jpeg"); // L'image que l'on va créer est un jpeg
        $destination = imagecreatefromjpeg($this->_chemin); // La photo est la destination
      }else{
        header ("Content-type: image/png"); // L'image que l'on va créer est un png
        $destination = imagecreatefrompng($this->_chemin); // La photo est la destination
      }
      $source = imagecreatefromjpeg("../use/avatar.jpg"); // Le logo est la source

      // Les fonctions imagesx et imagesy renvoient la largeur et la hauteur d'une image
      $largeur_source = imagesx($source);
      $hauteur_source = imagesy($source);
      $largeur_destination = $this->_width;
      $hauteur_destination = $this->_height;

      // On veut placer le logo en bas à droite, on calcule les coordonnées où on doit placer le logo sur la photo
      $destination_x = $largeur_destination - $largeur_source;
      $destination_y =  $hauteur_destination - $hauteur_source;

      // On met le logo (source) dans l'image de destination (la photo)
      imagecopymerge($destination, $source, $destination_x, $destination_y, 0, 0, $largeur_source, $hauteur_source, 60);

      if($this->extension=='jpg'){
        imagejpeg($destination,$this->_chemin);
      }else{
        imagepng($destination,$this->_chemin);
      }
    }

}
