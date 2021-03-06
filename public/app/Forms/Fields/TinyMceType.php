<?php namespace App\Forms\Fields;

use Kris\LaravelFormBuilder\Fields\FormField;

class TinyMceType extends FormField {

    protected function getTemplate()
    {
        // At first it tries to load config variable,
        // and if fails falls back to loading view
        // resources/views/fields/image.blade.php
        return 'fields.tinymce';
    }

    public function render(array $options = [], $showLabel = true, $showField = true, $showError = true)
    {
        return parent::render($options, $showLabel, $showField, $showError);
    }

    /**
     * @inheritdoc
     */
    public function getDefaults()
    {
        return [
            'height' => 320
        ];
    }
}