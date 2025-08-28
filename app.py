from flask import Flask, render_template
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Asegúrate de que la carpeta exista
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/')
def home():
    # Lista de archivos en la carpeta uploads
    files = []
    for file in os.listdir(UPLOAD_FOLDER):
        if file.lower().endswith(('.jpg', '.jpeg', '.png', '.mp4')):
            files.append(file)
    return render_template('index.html', files=files)

if __name__ == '__main__':
    app.run(debug=True)