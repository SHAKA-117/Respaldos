from flask import Flask, render_template, request, redirect, session, url_for

app = Flask(__name__)

@app.route("/")
def Index():
    return render_template("Catalogo_Cuerdas.html")

if __name__ == "__name__":
    app.run(debug=True)
      
