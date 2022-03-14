Feature: Youtube Simple Case

  I want to do some operation in youtube, such as: switch tab, filter and view video

  @focus
  Scenario: Enter the main page
    Given open youtube website
    When switch the menu to music tab
    Then view the the page under the tab
    And click the explore tab
    And input excel for search
    And select the first video
    And pause the video
    Then click the menu and jump to home

