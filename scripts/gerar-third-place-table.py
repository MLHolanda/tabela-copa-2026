import camelot
import pandas as pd
from pathlib import Path

BASE = Path(__file__).resolve().parent.parent

PDF = BASE / "dados" / "FWC2026_regulations_EN.pdf"
CSV = BASE / "dados" / "fifa-495.csv"


tabelas = []

for pagina in range(80, 98):
    print(f"Lendo página {pagina}...")

    tables = camelot.read_pdf(
        str(PDF),
        pages=str(pagina),
        flavor="stream"
    )

    if pagina == 80:
        df = tables[1].df
        df = df.iloc[1:]          # remove o cabeçalho
    else:
        df = tables[0].df

    tabelas.append(df)

'''
tabelas = []

for pagina in range(80, 98):
    print(f"\n===== Página {pagina} =====")

    tables = camelot.read_pdf(
        str(PDF),
        pages=str(pagina),
        flavor="stream"
    )

    print(f"Tabelas encontradas: {len(tables)}")

    for i, tabela in enumerate(tables):
        print(f"\n--- Tabela {i} ---")
        print(tabela.df.head())


'''
'''
for pagina in range(80, 98):
    print(f"Lendo página {pagina}...")

    tables = camelot.read_pdf(
        str(PDF),
        pages=str(pagina),
        flavor="stream"
    )

    if len(tables) > 1:
        df = tables[1].df

        # remove cabeçalhos repetidos
        if df.iloc[0,0] == "Option":
            df = df.iloc[1:]

        tabelas.append(df)
'''
print()

df_final = pd.concat(tabelas, ignore_index=True)

df_final.to_csv(CSV, index=False)

print("------------------------")
print("CSV criado com sucesso!")
print(f"Linhas: {len(df_final)}")
print(f"Arquivo: {CSV}")