from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/index')
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('base.html')


if __name__ == '__main__':
    print(1)
    app.run(debug=True) 