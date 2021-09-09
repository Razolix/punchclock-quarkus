package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Ticket;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class TicketService {
    @Inject
    EntityManager entityManager;

    public TicketService() {
    }

    @Transactional
    public Ticket createTicket(Ticket ticket) {
        entityManager.persist(ticket);
        return ticket;
    }

    @Transactional
    public void removeTicket(Long id) {
        Ticket ticket = getTicket(id);
        entityManager.remove(ticket);
    }

    @SuppressWarnings("unchecked")
    public List<Ticket> findAll() {
        var query = entityManager.createQuery("FROM Ticket");
        return query.getResultList();
    }

    public Ticket getTicket(Long id) {
        return entityManager.find(Ticket.class, id);
    }

    @Transactional
    public void updateTicket(Ticket ticket) {
        entityManager.merge(ticket);
    }

}