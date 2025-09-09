using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using WebApplicationCrud.Models.Entidades.Base;

namespace WebApplicationCrud.Models.Entidades
{
    public class UsuariosModel:BaseModel
    {

        [Display(Name = "TercerosId")]
        [ForeignKey("TercerosModel")]
        public int TercerosModelId { get; set; }
        public TercerosModel TercerosModel { get; set; }

        [Required(ErrorMessage = "El campo es requerido")]
        public string Password { get; set; }

        [Required(ErrorMessage = "El campo es requerido")]
        public string ConfirmPassword { get; set; }

        [Required(ErrorMessage = "El campo es requerido")]
        public string Rol { get; set; }

        public string EstadoUsuario { get; set; }

    }
}
