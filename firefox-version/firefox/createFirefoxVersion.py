import os
import shutil
import json
from zipfile import ZipFile

current_path = os.getcwd()  # Get file path
folder_name_firefox = "firefox-version/firefox"
folder_path_firefox = os.path.join(current_path, folder_name_firefox)
manifest_directory = os.path.join(current_path, "firefox-version")


def createFirefoxVersion():
    createFolder(current_path, folder_path_firefox, folder_name_firefox)
    copyFiles(current_path, folder_path_firefox, folder_name_firefox) # Copy new files in firefox directory
    replaceJSFiles(folder_name_firefox, "chrome.", "browser.") # Replace content
    copyManifest(manifest_directory, folder_path_firefox, current_path) # Copy manifest from the firefox-version directory and update version
    zipFile(folder_path_firefox, manifest_directory)


def createFolder(current_path, folder_path_firefox, folder_name_firefox):
    if os.path.exists(folder_path_firefox):
        shutil.rmtree(folder_path_firefox)  # Delete previous
    os.makedirs(folder_path_firefox)


def copyFiles(current_path, folder_path_firefox, folder_name_firefox):

    exclude_items = ["manifest.json", "firefox", "firefox-version", ".git"]

    for item in os.listdir(current_path):
        item_path = os.path.join(current_path, item)
        destination_path = os.path.join(folder_path_firefox, item)

        if item in exclude_items:
            print(f"Excluded : {item}")
            continue

        if os.path.isfile(item_path):
            shutil.copy(item_path, destination_path)
    
        elif os.path.isdir(item_path):
            shutil.copytree(item_path, destination_path)


def replaceJSFiles(directory, old_text, new_text):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".js"):
                file_path = os.path.join(root, file)
                
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                 
                updated_content = content.replace(old_text, new_text)
                
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(updated_content)
                    

def copyManifest(manifest_directory, folder_path_firefox, current_path):
    source_file = os.path.join(manifest_directory, "manifest.json")
    destination_file = os.path.join(folder_path_firefox, "manifest.json")
    reference_file = os.path.join(current_path, "manifest.json")
    
    if not os.path.exists(source_file):
        print(f"Le fichier 'manifest.json' n'existe pas dans {manifest_directory}.")
        return
    if not os.path.exists(reference_file):
        print(f"Le fichier 'manifest.json' n'existe pas dans {current_path}.")
        return
    
    with open(reference_file, "r", encoding="utf-8") as f:
        reference_data = json.load(f)
        reference_version = reference_data.get("version")
        if not reference_version:
            print("Aucune clé 'version' trouvée dans le manifest.json de référence.")
            return

    with open(source_file, "r", encoding="utf-8") as f:
        manifest_data = json.load(f)
        manifest_data["version"] = reference_version

    os.makedirs(folder_path_firefox, exist_ok=True)

    with open(destination_file, "w", encoding="utf-8") as f:
        json.dump(manifest_data, f, indent=4)

    print(f"Manifest updated.")


def zipFile(firefox_folder, firefox_version_folder):
    # Définir le chemin du fichier ZIP
    zip_path = os.path.join(firefox_version_folder, "firefox-plugin.zip")
    
    # Supprimer l'ancien fichier ZIP s'il existe
    if os.path.exists(zip_path):
        os.remove(zip_path)
        print(f"Fichier existant supprimé : {zip_path}")
    
    # Créer le fichier ZIP
    with ZipFile(zip_path, 'w') as zipf:
        for root, dirs, files in os.walk(firefox_folder):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, start=firefox_folder)  # Chemin relatif dans le ZIP
                zipf.write(file_path, arcname)
    
    print(f"Created ZIP file.")




createFirefoxVersion()
