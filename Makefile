image:
	docker build -t cantcode/scrapingthunder .

deploy:
	docker run --name cantcode/scrapingthunder_c -p 3000:3000 cantcode/scrapingthunder