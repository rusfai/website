from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main_html.html')

@app.route('/about')
def about():
    return 'Здесь будет информация об авторе сайта.'

@app.route('/blog')
def blog():
    return 'Это блог с заметками о работе и увлечениях.'

if __name__ == '__main__':
    app.run(debug=True)