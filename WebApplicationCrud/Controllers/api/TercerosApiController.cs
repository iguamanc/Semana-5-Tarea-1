using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplicationCrud.Data;
using WebApplicationCrud.Models.Entidades;

namespace WebApplicationCrud.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class TercerosApiController : ControllerBase
    {
        private readonly DatosDbContext _context;

        public TercerosApiController(DatosDbContext context)
        {
            _context = context;
        }

        // GET: api/TercerosApi
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TercerosModel>>> GetTerceros()
        {
            return await _context.Terceros.ToListAsync();
        }

        // GET: api/TercerosApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TercerosModel>> GetTercerosModel(int id)
        {
            var tercerosModel = await _context.Terceros.FindAsync(id);

            if (tercerosModel == null)
            {
                return NotFound();
            }

            return tercerosModel;
        }

        // PUT: api/TercerosApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTercerosModel(int id, TercerosModel tercerosModel)
        {
            if (id != tercerosModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(tercerosModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TercerosModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TercerosApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TercerosModel>> PostTercerosModel(TercerosModel tercerosModel)
        {
            _context.Terceros.Add(tercerosModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTercerosModel", new { id = tercerosModel.Id }, tercerosModel);
        }

        // DELETE: api/TercerosApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTercerosModel(int id)
        {
            var tercerosModel = await _context.Terceros.FindAsync(id);
            if (tercerosModel == null)
            {
                return NotFound();
            }

            _context.Terceros.Remove(tercerosModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TercerosModelExists(int id)
        {
            return _context.Terceros.Any(e => e.Id == id);
        }
    }
}
