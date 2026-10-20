<?php
/**
 * Plugin Name: Cartão Dra. Carla Rodrigues
 * Description: Cartão responsivo com foto, contatos e tour 360. Use [cartao_carla].
 * Version: 1.0.0
 * Requires at least: 6.0
 * Requires PHP: 7.4
 * License: GPL-2.0-or-later
 */
if (!defined('ABSPATH')) { exit; }

function dra_carla_render_card($atts = array()) {
    // FOTO: a foto anterior já está incluída. Troque pelo atributo foto do shortcode.
    // TOUR: preencha o atributo tour com o link HTTPS. Exemplo:
    // [cartao_carla foto="https://seusite.com/wp-content/uploads/foto.jpg" tour="https://seusite.com/tour/"]
    $atts = shortcode_atts(array(
        'foto' => plugins_url('assets/carla.jpg', __FILE__),
        'tour' => 'https://my.matterport.com/show/?m=7q1qxJgpf9w&play=1',
    ), $atts, 'cartao_carla');
    $template = file_get_contents(__DIR__ . '/cartao.html');
    if ($template === false) { return ''; }
    // URLs limitadas a HTTP/HTTPS e escapadas para atributos HTML.
    return str_replace(
        array('src="COLE_A_URL_DA_FOTO_AQUI"', 'src="https://my.matterport.com/show/?m=7q1qxJgpf9w&amp;play=1"'),
        array('src="' . esc_url($atts['foto'], array('https', 'http')) . '"',
              'src="' . esc_url($atts['tour'], array('https')) . '"'),
        $template
    );
}
add_shortcode('cartao_carla', 'dra_carla_render_card');
