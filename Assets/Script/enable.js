#pragma strict

var NextScene : GameObject;
var Fireworks : GameObject;

function OnTriggerEnter(other : Collider) {
	NextScene.SetActive(true);
	Fireworks.SetActive(true);
}