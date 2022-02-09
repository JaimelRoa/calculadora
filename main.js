content = document.querySelector(".container")
pantalla = document.querySelector(".pantalla")
boton = document.querySelector(".boton_igual")
content.addEventListener("click", (e) => {
        if (e.target != content && e.target != pantalla) {
            try {

                const text = e.target.textContent
                if (text != "=") {
                    switch (text) {
                        case '√':
                            pantalla.value = Math.sqrt(parseInt(pantalla.value))
                            break;
                        case 'CE':
                            pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1)
                            break;
                        default:
                            pantalla.value += text
                    }

                } else {
                    result = pantalla.value.replace("^", "**").replace("x", "*")
                    pantalla.value = eval(result)
                }
            } catch (e) {
                pantalla.value = "Error"
                console.error(e)
            }

        }
    })
    /*
    content.addEventListener("click", (e) => {
        if (e.target != content) {
            text = e.target.textContent
            num = pantalla.value += text
            opera = []
            opera.push(num)
            num1 = opera[0]
            num2 = opera[2]
            resul = eval(opera.join(","))
            console.log(resul)
            boton.addEventListener("click", () => {
                pantalla.value = resul
            })
        }
    })
    */