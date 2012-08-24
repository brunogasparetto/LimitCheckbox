# Introdução #

JQuery.limitcheckbox é um plugin que limita a seleção de inputs do tipo checkbox.

O desenvolvi, a princípio, para testar a criação de plugin utilizando a jQuery Boilerplate.

## Como Usar ##

* Ter os checkbox em um container (pode usar o body como tal).
* Invocar o plugin neste container, especificando o limite ao invocar o plugin ou usando o atributo data-limit-checkbox no container.
* O limite especificado pelo atributo data-limit-checkbox sobrepõe a opção indicada ao instanciar o plugin.

## Exemplos ##

```html
<fieldset class="limitcheckbox">
    <legend>Escolha as opções:</legend>
    <p><input type="checkbox" id="01" /><label for="01">Texto 01</label></p>
    <p><input type="checkbox" id="02" /><label for="02">Texto 02</label></p>
    <p><input type="checkbox" id="03" /><label for="03">Texto 03</label></p>
    <p><input type="checkbox" id="04" /><label for="04">Texto 04</label></p>
    <p><input type="checkbox" id="05" /><label for="05">Texto 05</label></p>
</fieldset>

<fieldset class="limitcheckbox" data-limit-checkbox="3">
    <legend>Escolha as opções:</legend>
    <p><input type="checkbox" id="11" /><label for="11">Texto 11</label></p>
    <p><input type="checkbox" id="12" /><label for="12">Texto 12</label></p>
    <p><input type="checkbox" id="13" /><label for="13">Texto 13</label></p>
    <p><input type="checkbox" id="14" /><label for="14">Texto 14</label></p>
    <p><input type="checkbox" id="15" /><label for="15">Texto 15</label></p>
</fieldset>
```

```javascript
$(".limitcheckbox").limitcheckbox(2);
```

O primeiro bloco permitirá selecionar até 2 checkbox, enquanto o segundo bloco permitirá a seleção de até 3 checkbox
