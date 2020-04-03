package kz.gov.zerde.postgresql.services;

import kz.gov.zerde.postgresql.dao.MarkRepo;
import kz.gov.zerde.postgresql.models.Mark;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class HomeService {

    @Autowired
    private MarkRepo markRepo;

    public List<Mark> get() {
        List<Mark> list = new LinkedList<>();
        for (Mark mark : markRepo.findAll()) {
            list.add(mark);
        }
        return list;
    }

    public Mark create(Mark mark) {
        return markRepo.save(mark);
    }

}
