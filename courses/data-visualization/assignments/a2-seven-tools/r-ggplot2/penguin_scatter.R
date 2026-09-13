# penguin scatter. run from r-ggplot2 dir so ../penglings.csv works
library(ggplot2)

penglings <- read.csv("../penglings.csv", stringsAsFactors = FALSE)
penglings <- na.omit(penglings[, c("species", "flipper_length_mm", "body_mass_g", "bill_length_mm")])
ggplot(penglings, aes(x = flipper_length_mm, y = body_mass_g,
                      color = species, size = bill_length_mm)) +
  geom_point(alpha = 0.8) +
  scale_x_continuous(breaks = seq(170, 230, 10), name = "Flipper Length (mm)") +
  scale_y_continuous(breaks = seq(3000, 6000, 500), name = "Body Mass (g)") +
  scale_color_manual(values = c("Adelie" = "#F5A623", "Chinstrap" = "#9B59B6", "Gentoo" = "#1ABC9C")) +
  scale_size_continuous(range = c(2, 10), name = "Bill Length (mm)") +
  theme_minimal() +
  theme(legend.position = "right")

ggsave("../img/ggplot2.png", width = 7, height = 5, dpi = 150)
