# penguin scatter: flipper vs body mass, color=species, size=bill length. run from project root: python altair/penguin_scatter.py

import altair as alt
import pandas as pd

df = pd.read_csv("penglings.csv")
df = df.dropna(subset=["flipper_length_mm", "body_mass_g", "bill_length_mm"])

chart = (
    alt.Chart(df)
    .mark_circle(opacity=0.8)
    .encode(
        x=alt.X("flipper_length_mm:Q", title="Flipper Length (mm)", scale=alt.Scale(zero=False)),
        y=alt.Y("body_mass_g:Q", title="Body Mass (g)", scale=alt.Scale(zero=False)),
        color=alt.Color("species:N", scale=alt.Scale(domain=["Adelie", "Chinstrap", "Gentoo"],
            range=["#F5A623", "#9B59B6", "#1ABC9C"])),
        size=alt.Size("bill_length_mm:Q", title="Bill Length (mm)"),
    )
    .properties(width=600, height=450)
)

chart.save("img/altair.png")
