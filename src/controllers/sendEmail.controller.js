import { transporter } from './../mailer';


export const sendEmail = async (req, res) => {
    const { name, email } = await req.body
    console.log(email)

    //Cuerpo del email
    const contentHTML = `
        <h1>Solicitud</h1>
        <ul>
            <li>Nombre ${name} </li>
            <li>Email: ${email} </li> 
        </ul>
        <p></p>`

    try {
        // send mail with defined transport object
        await transporter.sendMail({
            from: '"Forgot password 👻" <luciano.mastran@gmail.com>', // sender address
            to: 'luciano.mastran@gmail.com', // list of receivers
            subject: "Forgot password  ✔", // Subject line
            //text: "Hello world?", // plain text body
            html: contentHTML, // html body
        })

    } catch (error) {
        console.log('error:', error)
    }
    res.send('succeful')
}