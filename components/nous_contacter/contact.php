<div class="contac-text-container">
  <h2>
    On travaille <br />
    <span>ensemble</span> ?
  </h2>
  <div class="text-contact">
    <p>
      5,35 milliards de personnes se sont connectées à internet en 2024. Il y a
      bien quelqu’un qui est intéressé par votre produit ou service. Encore
      faut-il pouvoir vous trouver ?
    </p>
    <span>
      Votre Marque, Notre Mission, Votre Succès <br />On commence quand ?
    </span>
  </div>
</div>





<div class="container">
        <form method="post" name="contactForm">
            <div class="form-group">
                <label for="name">Nom</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Jhon Smith" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="email@gmail.com" required>
            </div>
            <div class="form-group">
                <label for="phone">Numéro</label>
                <input type="tel" class="form-control" id="phone" name="phone" placeholder="060000000" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" name="message" rows="3" required></textarea>
            </div>
            <div class="form-group">
                <label for="services">Services</label>
                <div class="form-list-input">
                    <div class="list-1">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Site Web" id="service-web" name="services[]">
                            <label class="form-check-label" for="service-web"> Site Web </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Créations Graphiques" id="service-graphiques" name="services[]">
                            <label class="form-check-label" for="service-graphiques">
                                Créations Graphiques
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Formations" id="service-formations" name="services[]">
                            <label class="form-check-label" for="service-formations">
                                Formations
                            </label>
                        </div>
                    </div>
                    <div class="list-2">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Community Management" id="service-community" name="services[]">
                            <label class="form-check-label" for="service-community">
                                Community Management
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Stratégie & Consulting" id="service-strategie" name="services[]">
                            <label class="form-check-label" for="service-strategie">
                                Stratégie & Consulting
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="Autres" id="service-autres" name="services[]">
                            <label class="form-check-label" for="service-autres"> Autres </label>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="form-btn">Get started</button>
        </form>
</div>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];
        $services = implode(", ", $_POST["services"]);

        $to = "contact@quikystudio.com";
        $subject = "Formulaire de contact";
        $headers = "From: $email";
        $body = "
            Nom: $name
            Email: $email
            Numéro: $phone
            Services: $services
            Message: $message
        ";

        if (mail($to, $subject, $body, $headers)) {
            echo "Email sent successfully.";
        } else {
            echo "Failed to send email.";
        }
    }
    ?>
  