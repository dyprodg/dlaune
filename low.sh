#!/bin/bash

# Schleife durch alle PNG-Dateien im aktuellen Verzeichnis
for file in *.png; do
  # Setze den neuen Dateinamen mit -low.png
  new_file="${file%.png}-low.png"
  
  # Erstelle das verkleinerte Bild mit einer Breite von 200px
  convert "$file" -resize 200x "$new_file"
done
