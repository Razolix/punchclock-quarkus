package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Employee;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class EmployeeService {

    @Inject
    EntityManager entityManager;

    public EmployeeService() {
    }

    @Transactional
    public Employee createEmployee(Employee employee) {
        entityManager.persist(employee);
        return employee;
    }

    @Transactional
    public void removeEmployee(Long id) {
        Employee employee = getEmployee(id);
        entityManager.remove(employee);
    }

    @SuppressWarnings("unchecked")
    public List<Employee> findAll() {
        var query = entityManager.createQuery("FROM Employee");
        return query.getResultList();
    }

    public Employee getEmployee(Long id) {
        return entityManager.find(Employee.class, id);
    }

    @Transactional
    public void updateEmployee(Employee employee) {
        entityManager.merge(employee);
    }
}
