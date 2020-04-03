package kz.gov.zerde.postgresql.dao;

import kz.gov.zerde.postgresql.models.Mark;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarkRepo extends CrudRepository<Mark, Long> {
}
