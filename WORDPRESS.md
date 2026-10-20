# Cartão da Dra. Carla no WordPress

A foto anterior foi mantida. O cartão tem estilos isolados, áreas de atuação em destaque e adapta o layout à largura do bloco, inclusive em colunas estreitas do tema. O tour aparece dentro do próprio cartão em um iframe responsivo, sem depender do JavaScript do cartão.

## Opção 1 — colar o código

1. Envie `assets/carla.jpg` para **Mídia → Adicionar nova** e copie a URL completa do arquivo.
2. Abra `wordpress-cartaocarla.txt` e copie todo o conteúdo.
3. Na sua página, adicione um bloco **HTML personalizado** ou o widget **HTML** do Elementor e cole o código.
4. Procure `COLE_A_URL_DA_FOTO_AQUI` no atributo `src` e substitua pela URL da imagem:

```html
<!-- FOTO: URL completa da imagem enviada à Biblioteca de mídia. -->
<img src="https://seusite.com/wp-content/uploads/carla.jpg" ...>
```

O exemplo acima mostra só o ponto de troca: preserve os outros atributos do `<img>` no código completo.

5. Procure o comentário `TOUR VIRTUAL 360` e troque o `src` do iframe, se quiser usar outro tour:

```html
<!-- TOUR VIRTUAL 360: troque o link no src do iframe. -->
<iframe src="https://my.matterport.com/show/?m=7q1qxJgpf9w&amp;play=1" ...></iframe>
```

Preserve os outros atributos do iframe no código completo. O link atual já está configurado e usa `play=1` para iniciar o visualizador dentro do cartão.

6. Salve e confira a página publicada no computador e no celular. Use uma página com largura ampla ou modelo de largura total do seu tema para aproveitar as duas colunas no laptop.

Os comentários “FOTO” e “TOUR VIRTUAL 360” estão no próprio arquivo. O arquivo `.html` contém exatamente o mesmo código do `.txt`; `wordpress-preview.html` permite visualizar localmente com a foto anterior.

## Opção 2 — plugin com shortcode

O ZIP `cartao-carla-wordpress.zip` inclui a foto atual. Você não precisa editar arquivos do tema.

1. No painel, abra **Plugins → Adicionar novo → Enviar plugin**.
2. Envie o ZIP, instale e ative **Cartão Dra. Carla Rodrigues**.
3. Insira um bloco **Shortcode** na página e use:

```text
[cartao_carla]
```

Para adicionar o tour mantendo a foto anterior:

```text
[cartao_carla tour="https://seusite.com/tour/"]
```

Para trocar a foto e adicionar o tour:

```text
[cartao_carla foto="https://seusite.com/wp-content/uploads/nova-foto.jpg" tour="https://seusite.com/tour/"]
```

## Compatibilidade e verificação

O editor pode remover CSS e JavaScript se sua conta não permitir esse tipo de código. No WordPress.com, os elementos `style`, `script` e `iframe` precisam de um plano pago com recursos de hospedagem ativados. Nesse caso, use a opção de plugin quando a instalação estiver disponível. Consulte a [documentação do bloco HTML](https://wordpress.com/support/wordpress-editor/blocks/custom-html-block/).

O plugin usa a [API de shortcodes do WordPress](https://developer.wordpress.org/plugins/shortcodes/shortcodes-with-parameters/) e escapa os URLs antes de inseri-los no HTML.

JavaScript e sintaxe PHP validados; referências, isolamento dos seletores e integridade do ZIP conferidos. A instalação no seu WordPress e a validação visual com o seu tema ainda precisam ser feitas. O componente continua exibindo foto, especialidades e links de contato quando o JavaScript não executa; os efeitos e o botão de salvar contato dependem de JavaScript. O tour usa um iframe direto e precisa que o WordPress permita esse elemento. O visualizador do Matterport utiliza seus próprios scripts dentro do iframe.
