$(function () {
  $('.nav-toggle').on('click', function () {
    const nav = $('#navbar');
    const expanded = nav.hasClass('active');
    nav.toggleClass('active');
    $(this).attr('aria-expanded', !expanded);
  });

  $('.search-form').on('submit', function (event) {
    event.preventDefault();
    const query = $('.search-input').val().trim().toLowerCase();
    $('.searchable .card, .searchable article').each(function () {
      const text = $(this).text().toLowerCase();
      $(this).toggle(text.includes(query));
    });
  });

  $('.search-input').on('input', function () {
    const query = $(this).val().trim().toLowerCase();
    $('.searchable .card, .searchable article').each(function () {
      const text = $(this).text().toLowerCase();
      $(this).toggle(text.includes(query));
    });
  });

  const visits = localStorage.getItem('srcSportsVisits');
  const visitCount = visits ? Number(visits) + 1 : 1;
  localStorage.setItem('srcSportsVisits', visitCount);
  $('.visit-count').text(visitCount);

  $('.capture-form').on('submit', function (event) {
    event.preventDefault();
    const captchaAnswer = $('#captcha-answer').val().trim();
    const expected = $('#captcha-question').text().trim();
    const output = $(this).find('.form-message');
    if (captchaAnswer !== '7') {
      output.text('Please answer the captcha correctly to continue.');
      output.removeClass('alert-success').addClass('alert alert-error');
      output.attr('aria-live', 'assertive');
      return;
    }
    output.text('Thank you! Your submission has been received and a confirmation email was sent to the address provided.');
    output.removeClass('alert-error').addClass('alert alert-success');
    output.attr('aria-live', 'polite');
    this.reset();
  });

  $('.booking-form').on('submit', function (event) {
    event.preventDefault();
    const output = $(this).find('.form-message');
    output.text('Booking request submitted successfully. A confirmation email has been sent to your inbox.');
    output.removeClass('alert-error').addClass('alert alert-success');
    output.attr('aria-live', 'polite');
    this.reset();
  });
});
