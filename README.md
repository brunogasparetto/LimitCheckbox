# Introdução #

JQuery.limitcheckbox é um plugin que limita a seleção de inputs do tipo checkbox.

O desenvolvi, a princípio, para testar a criação de plugin utilizando a jQuery Boilerplate.

## Como Usar ##

* Ter os checkbox em um container (pode usar o body como tal).
* Invocar o plugin neste container, especificando o limite ao invocar o plugin ou usando o atributo data-limit-checkbox no container.
* O limite especificado pelo atributo data-limit-checkbox sobrepõe a opção indicada ao instanciar o plugin.

** Exemplos **

```html
<div class="limitcheckbox">
    <p><input type="checkbox" id="01" /><label for="01">Outro texto</label></p>
    <p><input type="checkbox" id="02" /><label for="02">Outro texto</label></p>
    <p><input type="checkbox" id="03" /><label for="03">Outro texto</label></p>
    <p><input type="checkbox" id="04" /><label for="04">Outro texto</label></p>
    <p><input type="checkbox" id="05" /><label for="05">Outro texto</label></p>
</div>

<div class="limitcheckbox" data-limit-checkbox="3">
    <p><input type="checkbox" id="1" /><label for="1">Texto</label></p>
    <p><input type="checkbox" id="2" /><label for="2">Texto</label></p>
    <p><input type="checkbox" id="3" /><label for="3">Texto</label></p>
    <p><input type="checkbox" id="4" /><label for="4">Texto</label></p>
    <p><input type="checkbox" id="5" /><label for="5">Texto</label></p>
</div>
```

```javascript
$(".limitcheckbox").limitcheckbox(2);
```

O primeiro bloco permitirá selecionar até 2 checkbox, enquanto o segundo bloco permitirá a seleção de até 3 checkbox