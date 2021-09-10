package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.service.EntryService;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import javax.annotation.security.RolesAllowed;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * For Entry entity
 */
@Path("/entries")
@Tag(name = "Entries", description = "Handling of entries")
@RolesAllowed({ "Admin" })
public class EntryController {

    /**
     * EntryService Injection
     */
    @Inject
    EntryService entryService;

    /**
     * Entries holen
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Entry> list() {
        return entryService.findAll();
    }

    /**
     * Entry hinzufügen
     */
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Entry add(Entry entry) {
        return entryService.createEntry(entry);
    }

    /**
     * Entry entfernen
     */
    @DELETE
    @Path("/{id}")
    public void remove(@PathParam Long id) {
        entryService.removeEntry(id);
    }

    /**
     * Gewünschten Entry holen
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/{id}")
    public Entry get(@PathParam Long id) {
        return entryService.getEntry(id);
    }

    /**
     * Entry updaten
     */
    @PUT
    public void update(Entry entry) {
        entryService.updateEntry(entry);
    }
}
