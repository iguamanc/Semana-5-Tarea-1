﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplicationCrud.Models.Entidades.Base
{
    public class BaseModel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime Create_At { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime Update_At { get; set; }
        [Display(Name = "Se puede eliminar ?")]
        public bool isDelete { get; set; }
    }
}
