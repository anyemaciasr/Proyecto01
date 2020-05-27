using System;
using System.Net.Mail;
using Entity;
namespace Infraestructura {
    public class Email {
        private MailMessage email;
        private SmtpClient smtp;
        public Email () {
            smtp = new SmtpClient ();
        }
        private void ConfigurarSmt () {
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.UseDefaultCredentials = false;
            smtp.Credentials = new System.Net.NetworkCredential ("ojuankita9@gmail.com", "1064121751Jk");
        }
        private void ConfigurarEmail (string correoElectronico,string nombre) {

            email = new MailMessage ();
            email.To.Add (correoElectronico);
            email.From = new MailAddress ("ojuankita9@gmail.com");
            email.Subject = "Registro de Hotel " + DateTime.Now.ToString ("dd/MMM/yyy hh:mm:ss");
            email.Body = $"<b>Sr {nombre }</b> <br " +
                $" > se ha realizado su registro Sartisfactoriamente";
            email.IsBodyHtml = true;
            email.Priority = MailPriority.Normal;
        }
        public string EnviarEmail (string correoElectronico, string nombre) {
            try {
                ConfigurarSmt ();
                ConfigurarEmail (correoElectronico, nombre);
                smtp.Send (email);
                return ("Correo enviado Satifactoriamente");
            } catch (Exception e) {
                return ("error al enviar correo" + e.Message);
            } finally {
                email.Dispose ();
            }
        }
    }
}