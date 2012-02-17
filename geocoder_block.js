/**
 * @file
 * This file manages callback functions for the geocoder_block module.
 *
 * @author Pablo López (plopesc)
 * @ingroup Whami
 */

Drupal.behaviors.geocoder_block = function (context) {
	Drupal.GeocoderBlock = Drupal.GeocoderBlock || {};
      // Define click actions for Geocode button
      $('form#geocoder-block-form #edit-geocoder-block-geocode-button').click(function() {
    	  Drupal.geocoderTextfield.launchHook($('form#geocoder-block-form input[class*="geocoder-textfield"]') )
        return false;
      });
}