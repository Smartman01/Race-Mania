#pragma strict

var LoadingImage : GameObject;

function LoadScene (level : int) {
		LoadingImage.SetActive(true);
		Application.LoadLevel (level);
}
