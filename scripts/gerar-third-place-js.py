from pathlib import Path
import pandas as pd
import json

BASE = Path(__file__).resolve().parent.parent

CSV = BASE / "dados" / "fifa-495.csv"
JS = BASE / "js" / "third-place-table.js"

colunas = [
    "Option",
    "1A",
    "1B",
    "1D",
    "1E",
    "1G",
    "1I",
    "1K",
    "1L",
]

df = pd.read_csv(CSV, names=colunas, header=0)

tabela = {}

for _, row in df.iterrows():

    terceiros = []

    confrontos = {}

    for coluna in colunas[1:]:
        terceiro = row[coluna]

        grupo = terceiro[1]      # 3E -> E
        terceiros.append(grupo)

        confrontos[coluna] = terceiro

    chave = "".join(sorted(terceiros))

    tabela[chave] = confrontos

JS.parent.mkdir(exist_ok=True)

with open(JS, "w", encoding="utf-8") as f:
    f.write("// Arquivo gerado automaticamente.\n\n")
    f.write("window.THIRD_PLACE_TABLE = ")
    json.dump(tabela, f, indent=2)
    f.write(";\n")

print(f"Arquivo criado: {JS}")
print(f"Combinações: {len(tabela)}")
