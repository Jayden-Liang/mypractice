from flask import url_for

class TestPage(object):
    def test_home_page(self, client):
        response = client.get(url_for('page.index'))
        assert response.status_code == 200
        assert b'site' in response.get_data()
