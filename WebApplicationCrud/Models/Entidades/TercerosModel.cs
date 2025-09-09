using System.ComponentModel.DataAnnotations;
using WebApplicationCrud.Models.Entidades.Base;

namespace WebApplicationCrud.Models.Entidades
{
    public class TercerosModel : BaseModel
    {
        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Nombres { get; set; }

        [EmailAddress(ErrorMessage = "El formato no de correo electronico")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Direccion { get; set; }
        [Required(ErrorMessage = "Cammpo Requerido")]
        public string Cedula_RUC { get; set; }
    }
}
