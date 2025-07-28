txt = prompt("Digite um texto");
numeroCaracteres = txt.length;
numeroFaltante = numeroCaracteres - 140;

if (numeroFaltante > 0) {
  alert(
    "Seu texto possui " +
      txt +
      " caracteres e faltam mais " +
      numeroFaltante +
      " caracteres para alcançar 140"
  );
} else {
  alert("Seu texto será cortado da seguinte forma: " + txt.slice(0, 141));
}
                                                                              