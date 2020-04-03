package kz.gov.zerde.postgresql.controllers;

import kz.gov.zerde.postgresql.models.Mark;
import kz.gov.zerde.postgresql.services.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/")
public class HomeController {

    @Autowired
    private HomeService homeService;

    @RequestMapping(method = RequestMethod.GET)
    public String getHello() {

        return "Hello, World";

    }

    @RequestMapping(value = "mark", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<Map<String, List<Mark>>> list() {

        return new ResponseEntity<>(new HashMap<String, List<Mark>>(){{
            put("data", homeService.get());
        }}, HttpStatus.OK);

    }

    @RequestMapping(value = "mark", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<Map<String, Boolean>> create(@RequestBody Mark mark) {

        homeService.create(mark);
        return new ResponseEntity<>(new HashMap<String, Boolean>(){{
            put("result", true);
        }}, HttpStatus.OK);

    }

}
