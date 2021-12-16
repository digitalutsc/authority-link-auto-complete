/**
 * @file
 * Authority Link Autocomplete behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Autocompletes authority links
   */
  Drupal.behaviors.authorityLinkAutocomplete = {
    attach: function (context, settings) {   

      var elements = once('al-autocomplete', jQuery('.title input'), context);
      elements.forEach(element => {
        attachAutocomplete(element, context);
      });

      function attachAutocomplete(target, context) {
        let fieldSet = jQuery(target, context).closest('.fieldset-wrapper');
        let urlField = fieldSet.find('.url input');
        let textField = fieldSet.find('.title input');
        let sourceField = fieldSet.find('.source select');
        
        jQuery(target).autocomplete({
          source: function(request, response) {
            jQuery.ajax({
              url: drupalSettings.path.baseUrl + 'linked-data-lookup/' + sourceField.val(),
              dataType: 'json',
              data: {
                q: request.term
              },
              success: function(data) {
                response(data);
              }
            }) 
          },
          select: function(event, ui) {
            event.preventDefault();
            urlField.val(ui.item.value);
            textField.val(ui.item.label);
          }
        });
      }
    }
  };

} (jQuery, Drupal));
