package com.luker.app.cucumber.stepdefs;

import com.luker.app.LukerApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = LukerApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
